using UnityEngine;
using UnityEngine.UI;

public class CarController : MonoBehaviour
{
    public float acceleration = 1000f;  // Normal acceleration force
    public float sprintMultiplier = 1.5f;  // Multiplier for sprinting (when Shift is held)
    public float steering = 300f;  // Base steering sensitivity
    public float brakeForce = 1500f;  // Brake force
    public float maxSpeed = 30f;  // Max speed
    public float sideForce = 300f;  // Sideways movement force (left/right)

    public Vector3 customGravity = new Vector3(0, -9.8f, 0);  // Custom gravity force

    private Rigidbody rb;  // Car's Rigidbody component
    private float currentSpeed;
    private float horizontalInput;
    private float verticalInput;
    private bool isSprinting;
    private bool isGrounded;

    public Transform[] wheelRaycasts; // Add wheel positions for raycasting

    public Vector3 respawnPosition = new Vector3(0, 1, 0); // Set your desired respawn position
    public float resetThreshold = -1000f;  // Y position threshold for reset
    public Text resetText;

    void Start()
    {
        rb = GetComponent<Rigidbody>();

        // Disable Unity's default gravity
        Physics.gravity = Vector3.zero;
    }

    void Update()
    {
        // Reset car when falling below reset threshold
        if (transform.position.y < resetThreshold)
        {
            ResetCar();
        }

        if (Input.GetKeyDown(KeyCode.R)) // Reset manually by pressing R
        {
            ResetCar();
        }

        // Gather input from player
        horizontalInput = Input.GetAxis("Horizontal");  // Left/Right arrow or A/D for steering (left/right movement)
        verticalInput = Input.GetAxis("Vertical");  // Up/Down arrow or W/S for acceleration/braking
        isSprinting = Input.GetKey(KeyCode.LeftShift);  // Check if Shift is pressed for sprinting

        // Apply custom gravity
        ApplyCustomGravity();

        // Check if the car is grounded
        isGrounded = IsGrounded();

        // Apply acceleration and steering logic
        HandleCarMovement();
    }

    private void ApplyCustomGravity()
    {
        // Apply custom gravity (manually add force each frame)
        rb.AddForce(customGravity, ForceMode.Acceleration);
    }

    private void HandleCarMovement()
    {
        // If not grounded, stop acceleration and movement
        if (!isGrounded)
        {
            return;
        }

        // Determine the acceleration force (increase if sprinting)
        float currentAcceleration = isSprinting ? acceleration * sprintMultiplier : acceleration;

        // Handle forward movement based on W or Up arrow (right is forward in this case)
        if (verticalInput > 0)  // Moving forward (W or Up)
        {
            rb.AddForce(transform.right * verticalInput * currentAcceleration * Time.deltaTime, ForceMode.VelocityChange);
        }
        // Handle backward movement based on S or Down arrow (right is forward in this case)
        else if (verticalInput < 0)  // Moving backward (S or Down)
        {
            rb.AddForce(transform.right * verticalInput * currentAcceleration * Time.deltaTime, ForceMode.VelocityChange);
        }

        // Apply braking when Space is pressed
        if (Input.GetKey(KeyCode.Space))  // Brake with Space key
        {
            // Apply brake force
            rb.AddForce(-transform.right * brakeForce * Time.deltaTime, ForceMode.VelocityChange);
        }

        // Limit max speed
        currentSpeed = rb.velocity.magnitude;
        if (currentSpeed > maxSpeed)
        {
            rb.velocity = rb.velocity.normalized * maxSpeed;
        }

        // Apply left/right movement (sideways)
        if (horizontalInput != 0)
        {
            rb.AddForce(transform.forward * horizontalInput * sideForce * Time.deltaTime, ForceMode.VelocityChange);
        }

        // Adjust steering based on speed
        float steer = horizontalInput * steering * Time.deltaTime;

        // Make steering harder as speed increases by scaling the steering factor
        float steeringFactor = Mathf.Clamp(1 - (currentSpeed / maxSpeed), 0.1f, 1f);
        steer *= steeringFactor;

        // Apply steering (rotate the car around the Y-axis)
        transform.Rotate(0, steer / 2, 0);  // Divide by 2 to make steering less aggressive
    }

    private bool IsGrounded()
    {
        // Cast rays from each wheel to check if the car is grounded
        foreach (Transform wheel in wheelRaycasts)
        {
            if (Physics.Raycast(wheel.position, Vector3.down, 10f))  // 1f is a small distance to detect ground
            {
                return true;  // Car is grounded if any wheel touches the ground
            }
        }

        return false;  // If no wheel is grounded, return false
    }

    private void ResetCar()
    {
        // Reset position to the respawn point and reset velocity to stop movement
        transform.position = respawnPosition;
        rb.velocity = Vector3.zero;  // Stop any movement
        rb.angularVelocity = Vector3.zero;  // Stop any rotation
    }
}
