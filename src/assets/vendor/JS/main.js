<script>
    let roomCount = 1; // Initialize room count

    const roomCountInput = document.getElementById('room-count');
    const incrementButton = document.getElementById('increment-button');
    const decrementButton = document.getElementById('decrement-button');
    const modal = document.getElementById('room-modal');
    const toggleModalButton = document.getElementById('toggle-modal');
    const confirmButton = document.getElementById('confirm-button');

    // Increment room count
    incrementButton.addEventListener('click', () => {
      roomCount++;
      roomCountInput.value = roomCount;
    });

    // Decrement room count
    decrementButton.addEventListener('click', () => {
      if (roomCount > 1) {
        roomCount--;
        roomCountInput.value = roomCount;
      }
    });

    // Toggle modal visibility
    toggleModalButton.addEventListener('click', () => {
      modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
    });

    // Confirm button hides the modal
    confirmButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  </script>