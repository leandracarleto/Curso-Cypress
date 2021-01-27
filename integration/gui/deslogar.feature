  Feature: Deslogar

       Scenario: Deslogar da página inicial
            Given que estou logada
            When clico no botão de perfil
            And clica no botão sair
            Then sou redirecionada para tela de login