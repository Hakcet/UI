using UnityEngine;

public class TimingLineTrigger : MonoBehaviour
{
    public bool timerRunning = false;  // Flag to check if timer is running
    private bool hasCrossed = false;   // Flag to track whether the car has crossed

    // Reference to the TimerManager (to start and stop the timer)
    public TimerManager timerManager;

    // OnTriggerEnter detects when the car enters the trigger zone
    void OnTriggerEnter(Collider other)
    {
        // Ensure that only the car triggers the event (check for a tag, etc.)
        if (other.CompareTag("Player"))
        {
            if (!hasCrossed)  // If this is the first crossing
            {
                // Start the timer
                timerManager.StartTimer();
                hasCrossed = true;
                timerRunning = true;
            }
            else if (hasCrossed)  // If this is the second crossing
            {
                // Stop the timer
                timerManager.StopTimer();
                hasCrossed = false;
                timerRunning = false;
            }
        }
    }
}
