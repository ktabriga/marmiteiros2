var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

MarmitaSchema = new Schema({
    nome: {
        type: String,
        unique: true,
        required: "Noma da marmita é obrigatório"
    },
    items: [String],
    diaSemana: {
        enum: [
            "segunda",
            "terca",
            "quarta",
            "quinta",
            "sexta",
            "sabado",
            "domingo"
        ]
    },
    valorBase: {
        type: Number,
        required: "Valor base da marmita é obrigatório"
    },
    opcionais: [
        {
            nome: {
                type : String,
                required: "Nome do opcional é obrigatório"
            },
            opcoes: [
                {
                    nome : {
                        type: String,
                        required: "Nome da opção é obrigatório"
                    },
                    valorAdicional: {
                        type: Number,
                        default: 0
                    }
                }
            ]
        }
    ]
});

module.exports = mongoose.model("Marmita", MarmitaSchema);
