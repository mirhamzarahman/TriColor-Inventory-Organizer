/**
 * ---------------------------------------------------------
 * TriColor Inventory Organizer
 * ---------------------------------------------------------
 * Organizes inventory items into three categories:
 *
 * 0 -> High Priority
 * 1 -> Medium Priority
 * 2 -> Low Priority
 *
 * Uses a single-pass three-way partitioning algorithm.
 * Time Complexity : O(n)
 * Space Complexity: O(1)
 * ---------------------------------------------------------
 */

class InventoryOrganizer {
    /**
     * Organize inventory items by priority.
     * @param {number[]} inventory
     * @returns {number[]}
     */
    organize(inventory) {
        let front = 0;
        let current = 0;
        let back = inventory.length - 1;

        while (current <= back) {
            switch (inventory[current]) {
                case 0:
                    this.swap(inventory, front, current);
                    front++;
                    current++;
                    break;

                case 1:
                    current++;
                    break;

                case 2:
                    this.swap(inventory, current, back);
                    back--;
                    break;

                default:
                    throw new Error("Invalid inventory category.");
            }
        }

        return inventory;
    }

    /**
     * Swap two items in the array.
     * @param {number[]} array
     * @param {number} first
     * @param {number} second
     */
    swap(array, first, second) {
        [array[first], array[second]] = [array[second], array[first]];
    }
}

// ---------------------------------------------

const warehouseInventory = [2, 0, 2, 1, 1, 0];

const organizer = new InventoryOrganizer();

console.log("Before Organization:");
console.log(warehouseInventory);

const organizedInventory = organizer.organize(warehouseInventory);

console.log("\nAfter Organization:");
console.log(organizedInventory);
