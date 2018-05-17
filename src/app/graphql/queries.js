const query = {
    isAllowed: ({userId, resources, permissions}) => {
        // Here, use :
        // Acl.isAllowed(userId, resources, permissions, (result) => return result)
        return false;
    },
    hasRole: ({userId, role}) => {
        // Here, use :
        // Acl.hasRole(userId, role, (result) => return result)
        return false;
    },
}

export default query
