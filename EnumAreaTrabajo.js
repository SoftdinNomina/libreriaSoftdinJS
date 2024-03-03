class EnumAreaTrabajo {
    static ADMINISTRATIVO = 1;
    static OPERATIVO = 2;

    static descriptions = [
        { id: EnumAreaTrabajo.ADMINISTRATIVO, code: 'ADMINISTRATIVO', description: 'Administrativo' },
        { id: EnumAreaTrabajo.OPERATIVO, code: 'OPERATIVO', description: 'Operativo' },
    ];

    static getCollection() {
        return EnumAreaTrabajo.descriptions;
    }

    static getById(id) {
        return EnumAreaTrabajo.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumAreaTrabajo.descriptions;
    }

    static getByDescription(description) {
        return EnumAreaTrabajo.descriptions.find(item => item.description === description) || null;
    }
}
