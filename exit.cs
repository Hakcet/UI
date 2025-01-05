using UnityEngine;
using UnityEngine.UI;  // Needed for UI Button

public class ExitGameButton : MonoBehaviour
{
    // Reference to the exit button
    public Button exitButton;

    void Start()
    {
        // Check if the exit button is assigned, and if it is, set up the button's OnClick listener
        if (exitButton != null)
        {
            exitButton.onClick.AddListener(ExitGame);
        }
    }

    // This function will be called when the exit button is clicked
    private void ExitGame()
    {
        // Exit the application
        Debug.Log("Exiting game...");

        // For the Unity Editor, use this to stop playing in the editor:
#if UNITY_EDITOR
        UnityEditor.EditorApplication.isPlaying = false;
#else
        Application.Quit();
#endif
    }
}
