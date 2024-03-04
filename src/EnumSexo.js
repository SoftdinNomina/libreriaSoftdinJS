class EnumSexo {
    static M = 1;
    static F = 2;

    static descriptions = [
        { id: EnumSexo.M, code: 'M', description: 'Masculino' },
        { id: EnumSexo.F, code: 'F', description: 'Femenino' },
    ];

    static getById(id) {
        return EnumSexo.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumSexo.descriptions;
    }

    static getByDescription(description) {
        return EnumSexo.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumSexo;

