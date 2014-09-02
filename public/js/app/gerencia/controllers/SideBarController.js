define([],
    function () {
        function SideBarController() {

        }

        SideBarController.prototype = {
            itemSelecionado: {},
            selecionarItem: function (item) {
                this.itemSelecionado = item;
            },

            getAtivo: function (item) {
                return this.itemSelecionado == item ? 'active' : '';
            }
        };
         

        return [SideBarController];
    });