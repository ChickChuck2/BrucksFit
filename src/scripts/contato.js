ato.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contatoForm');
    const msg = document.getElementById('contatoMsg');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const data = new FormData(form);
            fetch(form.action, {
                method: "POST",
                body: data,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    msg.textContent = "Mensagem enviada com sucesso!";
                    msg.style.color = "#25d366";
                    form.reset();
                } else {
                    msg.textContent = "Erro ao enviar. Tente novamente.";
                    msg.style.color = "#ff3333";
                }
            }).catch(() => {
                msg.textContent = "Erro ao enviar. Tente novamente.";
                msg.style.color = "#ff3333";
            });
        });
    }
});