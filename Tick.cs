using UnityEngine;
using TMPro;
using UnityEngine.SceneManagement;


public class TimerManager : MonoBehaviour
{
    private TextMeshProUGUI timerText;  // Reference to the TextMeshProUGUI component
    public string sceneName = "Menu";
    private float timer = 0f;
    private bool timerRunning = false;

    void Start()
    {
        // Find the GameObject with the "TimerText" tag and get the TextMeshProUGUI component
        GameObject timerObject = GameObject.FindGameObjectWithTag("TimerText");

        if (timerObject != null)
        {
            timerText = timerObject.GetComponent<TextMeshProUGUI>();  // Use Text if it's Unity UI Text
        }
        else
        {
            Debug.LogError("No GameObject with 'TimerText' tag found!");
        }
    }

    void Update()
    {
        if (timerRunning)
        {
            timer += Time.deltaTime;
            DisplayTime(timer);
        }
    }

    public void StartTimer()
    {
        timer = 0f;
        timerRunning = true;
    }

    public void StopTimer()
    {
        timerRunning = false;
    }

    private void DisplayTime(float timeToDisplay)
    {
        float minutes = Mathf.FloorToInt(timeToDisplay / 60);
        float seconds = Mathf.FloorToInt(timeToDisplay % 60);
        timerText.text = string.Format("{0:00}:{1:00}", minutes, seconds);
    }
}
