window.alert("Mais um popup chato")


$(document).ready(function() {
    $("#checkbox").click(function() {
        $("checkbox-menu").toggleClass("menu-hamburguer-ativo")
    })
})