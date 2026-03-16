import cv2
from pyzbar.pyzbar import decode
from supabase import create_client, Client
import datetime
import time

# Supabase Credentials
SUPABASE_URL = "https://vuebtdywnfpoihsavlxd.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1ZWJ0ZHl3bmZwb2loc2F2bHhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0MTE0MzAsImV4cCI6MjA4ODk4NzQzMH0.HHmVWQPCpux3Ki8t3AaxZB3oPlnLVfAyVKiRr-DpA04"

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

def check_ticket(ticket_hash):
    # Determine the event day based on current date
    # Day 1 -> 9 April 2026
    # Day 2 -> 10 April 2026
    # Day 3 -> 11 April 2026
    
    today = datetime.date.today()
    # today = datetime.date(2026, 4, 9) # For testing
    
    event_days = {
        datetime.date(2026, 4, 9): "day1_used",
        datetime.date(2026, 4, 10): "day2_used",
        datetime.date(2026, 4, 11): "day3_used"
    }
    
    if today not in event_days:
        return "TICKET NOT VALID TODAY"
    
    column_to_check = event_days[today]
    
    try:
        # Search for ticket in database
        response = supabase.table("early_pass_registrations") \
            .select("id, verification_status, " + column_to_check) \
            .eq("ticket_hash", ticket_hash) \
            .execute()
        
        if not response.data:
            return "FORGED TICKET"
        
        ticket = response.data[0]
        
        if ticket["verification_status"] != "verified":
            return "TICKET NOT VERIFIED"
        
        if ticket[column_to_check]:
            return "ALREADY USED TODAY"
        
        # Mark as used for today
        update_response = supabase.table("early_pass_registrations") \
            .update({column_to_check: True}) \
            .eq("id", ticket["id"]) \
            .execute()
        
        return "VALID TICKET"
        
    except Exception as e:
        return f"ERROR: {str(e)}"

def start_scanner():
    cap = cv2.VideoCapture(0)
    print("Scanner Started. Press 'q' to quit.")
    
    last_scan_time = 0
    
    while True:
        ret, frame = cap.read()
        if not ret:
            break
            
        # Scan for QR codes
        decoded_objects = decode(frame)
        for obj in decoded_objects:
            ticket_hash = obj.data.decode("utf-8")
            
            # Simple throttle to prevent multiple scans in a row
            current_time = time.time()
            if current_time - last_scan_time > 3:
                print(f"Scanned Hash: {ticket_hash}")
                result = check_ticket(ticket_hash)
                print(f"Result: {result}")
                
                # Visual Feedback
                color = (0, 0, 255) # Red for forged/error
                if result == "VALID TICKET":
                    color = (0, 255, 0) # Green
                elif result == "ALREADY USED TODAY":
                    color = (0, 165, 255) # Orange
                
                cv2.putText(frame, result, (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, color, 2)
                last_scan_time = current_time

        cv2.imshow("Highways 2026 QR Scanner", frame)
        
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    start_scanner()
