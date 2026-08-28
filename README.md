# 🎨 TriColor Inventory Organizer

Efficiently organize three-category inventory items using a single-pass in-place partitioning algorithm.

---

## 📖 Project Overview

TriColor Inventory Organizer is a lightweight JavaScript project that demonstrates how an optimized partitioning algorithm can be applied to real-world inventory management.

Instead of relying on traditional sorting methods, the system processes inventory items in one traversal while using constant extra memory, making it suitable for high-performance environments.

---

# 🌍 Real-World Concept

Imagine a warehouse where products arrive with three priority labels:

- 🔴 High Priority
- ⚪ Medium Priority
- 🔵 Low Priority

Before shipping, the warehouse must group identical priority items together as efficiently as possible.

Instead of performing expensive sorting operations, this project reorganizes the inventory in a single scan.

---

# 💡 Core Concept

The project demonstrates an in-place three-way partitioning strategy.

Three pointers continuously divide the inventory into:

```
Processed High Priority
Processed Medium Priority
Unprocessed Items
Processed Low Priority
```

This guarantees efficient organization without allocating additional memory.

---

# ⚙️ How the System Works

1. Start with three pointers.
2. Scan items from left to right.
3. Move high-priority items to the beginning.
4. Leave medium-priority items where they belong.
5. Move low-priority items to the end.
6. Continue until every item is processed.

---

# 🧠 Algorithm Used

## Dutch National Flag Algorithm

**Technique**

- Three-pointer partitioning
- In-place swapping
- Single traversal

---

# 🔄 Step-by-Step Logic

```
Initialize:

Front Pointer
Current Pointer
Back Pointer

↓

Current Item

High Priority?
    Move Front

Medium Priority?
    Continue

Low Priority?
    Move Back

↓

Repeat until complete
```

---

# ✨ Key Features

- ⚡ One-pass processing
- 💾 Constant memory usage
- 🔄 In-place organization
- 📦 Warehouse-inspired example
- 🧹 Clean JavaScript implementation
- 🚀 Highly scalable approach

---

# 📊 Example

### Input

```text
Inventory

[
 Low,
 High,
 Low,
 Medium,
 Medium,
 High
]
```

Internally represented as

```text
[2,0,2,1,1,0]
```

### Output

```text
[
 High,
 High,
 Medium,
 Medium,
 Low,
 Low
]
```

Internally

```text
[0,0,1,1,2,2]
```

---

# 📈 Complexity

| Metric | Complexity |
|----------|------------|
| Time | O(n) |
| Space | O(1) |

---

# 🛠 Technologies

- JavaScript (ES6)
- Node.js

---

# 📁 Project Structure

```
TriColor-Inventory-Organizer/
│
├── README.md
├── inventoryOrganizer.js
├── package.json
└── LICENSE
```

---

# ▶️ How to Run

Clone the repository

```bash
git clone https://github.com/mirhamzarahman/TriColor-Inventory-Organizer.git
```

Go into the project

```bash
cd TriColor-Inventory-Organizer
```

Run

```bash
node inventoryOrganizer.js
```

---

# 📚 Learning Outcomes

This project demonstrates:

- Three-way partitioning
- Pointer manipulation
- In-place algorithms
- Constant-space optimization
- Efficient inventory organization
- Practical algorithm design

---

# 🚀 Future Improvements

- REST API integration
- Warehouse dashboard
- Inventory visualization
- Product metadata support
- Multiple category partitioning
- Performance benchmarking
- Unit testing
- TypeScript version

---

# 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Mir Hamza Rahman**

GitHub:
https://github.com/mirhamzarahman

If you found this project helpful, consider giving it a ⭐.
