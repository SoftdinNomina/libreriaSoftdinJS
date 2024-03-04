class EnumRespuestaSINO {
    static SI = 1;
    static NO = 0;

    static descriptions = [
        { id: EnumRespuestaSINO.SI, code: 'SI', description: 'Sí' },
        { id: EnumRespuestaSINO.NO, code: 'NO', description: 'No' },
    ];

    static getById(id) {
        return EnumRespuestaSINO.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumRespuestaSINO.descriptions;
    }

    static getByDescription(description) {
        return EnumRespuestaSINO.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumRespuestaSINO;
