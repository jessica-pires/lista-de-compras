const form = document.querySelector('form');
const ul = document.querySelector('ul');
const input = document.querySelector('input[type="text"]');
const removeMessage = document.querySelector('.item-removido');
const removeMessageClose = document.querySelector('.item-removido button');
const deleteButtons = document.querySelectorAll(".btn-delete")

    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const newItem = input.value.trim();

        if (newItem) {
            // Criar os elementos do novo item
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            const label = document.createElement('label');
            label.textContent = newItem;
            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = "<i class='bx bx-trash'></i>";
            deleteButton.classList.add('btn-delete');

        
            const itemId = `item-${ul.children.length + 1}`;
            checkbox.id = itemId;
            label.setAttribute('for', itemId);

    
            deleteButton.addEventListener('click', () => {
                ul.removeChild(li); 
                showRemoveMessage();
            });

            // Adicionar os elementos ao 'li'
            li.appendChild(checkbox);
            li.appendChild(label);
            li.appendChild(deleteButton);

            // Adicionar o 'li'
            ul.appendChild(li);

            
            input.value = '';
        }
    });

    // Função para mostrar a mensagem de remoção
    function showRemoveMessage() {
        removeMessage.style.display = 'block';
    
    }

    removeMessageClose.addEventListener('click', () => {
        removeMessage.style.display = 'none';
    });

    //funcao para excluir elementos que  estao amostra
    deleteButtons.forEach(button => {{
        button.addEventListener('click' , function(){
            // Obtém o <li> pai do botão clicado
            const listItem = this.closest('li')
            listItem.remove()
        })
    }})

    // Função para fechar a mensagem de remoção quando clicar no 'X'
    removeMessageClose.addEventListener('click', () => {
        removeMessage.style.display = 'none';
    });

