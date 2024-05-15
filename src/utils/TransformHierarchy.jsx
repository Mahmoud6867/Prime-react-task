

export const TransformHierarchy = ({ input }) => {
    const transformToHierarchy = (input) => {
        const map = new Map();

        // Initialize nodes
        input.forEach(item => {
            map.set(item.id, {
                key: "",
                data: item,
                children: []
            });
        });

        // Build the hierarchy
        input.forEach(item => {
            const node = map.get(item.id);
            if (item.ManagerID === null) {
                node.key = "0";
            } else {
                const managerNode = map.get(item.ManagerID);
                node.key = `${managerNode.key}-${managerNode.children.length}`;
                managerNode.children.push(node);
            }
        });

        // Filter the root nodes (those with ManagerID null)
        const rootNodes = [...map.values()].filter(node => node.key === "0");

        return rootNodes;
    };

    return transformToHierarchy(input);
};
