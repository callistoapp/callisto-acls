const mutation = {
    removeAllow: function ({roles, resources, permissions}) {
        // Acl.removeAllow(roles, resources, permissions, () => return true ?)
        return false
    },
    allow: function ({roles, resources, permissions}) {
        // Acl.allow(roles, resources, permissions, () => return true ?)
        return false
    },
    addRoleParents: function ({role, parents}) {
        // Acl.addRoleParents(roles, resources, permissions, () => return true ?)
        return false
    },
    removeRole: function ({role}) {
        // Acl.allow(role, () => return true ?)
        return false
    },
    addUserRoles: function ({userId, role}) {
        // Acl.allow(userId, role, () => return true ?)
        return false
    },
    removeUserRoles: function ({userId, roles}) {
        // Acl.allow(userId, roles, () => return true ?)
        return false
    }
}

export default mutation
