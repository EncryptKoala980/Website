
<script>
    function toggleMode() {
        var body = document.body;
        var button = document.querySelector('.toggle-button');
        
        // Chuyển giữa các lớp light-mode và dark-mode
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');
        
        // Chuyển đổi hiệu ứng biểu tượng mặt trời và mặt trăng
        button.classList.toggle('light-mode');
        button.classList.toggle('dark-mode');
    }
</script>

