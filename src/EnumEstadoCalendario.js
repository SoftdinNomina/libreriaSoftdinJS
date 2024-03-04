class EnumEstadoCalendario {
    static NORMAL = 1;
    static FERIADO = 2;

    static descriptions = [
        { id: EnumEstadoCalendario.NORMAL, code: 'NORMAL', description: 'Normal' },
        { id: EnumEstadoCalendario.FERIADO, code: 'FERIADO', description: 'Feriado' },
    ];

    static getById(id) {
        return EnumEstadoCalendario.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumEstadoCalendario.descriptions;
    }

    static getByDescription(description) {
        return EnumEstadoCalendario.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumEstadoCalendario;