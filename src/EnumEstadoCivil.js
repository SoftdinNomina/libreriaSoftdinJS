class EnumEstadoCivil {
    static SOLTERO = 1;
    static CASADO = 2;
    static DIVORCIADO = 3;
    static SEPARADO = 4;
    static VIUDO = 5;
    static UNION_LIBRE = 6;
    static NO_DEFINIDO = 0;

    static descriptions = [
        { id: EnumEstadoCivil.SOLTERO, code: 'SOLTERO', description: 'Soltero(A)' },
        { id: EnumEstadoCivil.CASADO, code: 'CASADO', description: 'Casado(A)' },
        { id: EnumEstadoCivil.DIVORCIADO, code: 'DIVORCIADO', description: 'Divorciado(A)' },
        { id: EnumEstadoCivil.SEPARADO, code: 'SEPARADO', description: 'Separado(A)' },
        { id: EnumEstadoCivil.VIUDO, code: 'VIUDO', description: 'Viudo(A)' },
        { id: EnumEstadoCivil.UNION_LIBRE, code: 'UNION_LIBRE', description: 'Union Libre' },
        { id: EnumEstadoCivil.NO_DEFINIDO, code: 'NO_DEFINIDO', description: 'NO Definido' }
    ];

    static getById(id) {
        return EnumEstadoCivil.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumEstadoCivil.descriptions;
    }

    static getByDescription(description) {
        return EnumEstadoCivil.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumEstadoCivil;
