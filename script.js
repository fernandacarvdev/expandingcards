const panels = document.querySelectorAll('.panel')  //seleciona

panels.forEach((panel) =>{ //*para cada* (panel)...
    panel.addEventListener('click', () =>{ //*algo acontece quando* ¨clicar¨
            removeActiveClasses() //primeiro remove classes ativas
            panel.classList.add('active')  //depois adiciona classes e as ativa quando clicadas
    })
}) 

        function removeActiveClasses(){  //diz o que a tag tem que fazer
            panels.forEach((panel) => {  //*para cada* (panel)...
                    panel.classList.remove('active')  //*remova* o (active)
            })
        }