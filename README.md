# Project Name: Basic Data Translator Version 2

## Description
I was curious about whether I could implement a number base converter in a **dynamically typed language** instead of a statically typed one like C++.  
I chose **JavaScript** with **Node.js** to explore its features, practice asynchronous input handling, and see how dynamically typed languages handle number conversions and validation.

This console application allows users to convert numbers between **binary**, **decimal**, and **hexadecimal** formats, with proper input validation and 64-bit number support.

## Features
- Interactive console interface using Node.js `readline` module
- Input validation for:
  - Binary (0s and 1s)
  - Decimal (digits 0–9)
  - Hexadecimal (0–9, A–F)
- Supports large integers using JavaScript’s `BigInt` type
- Conversion between:
  - Binary ↔ Decimal
  - Binary ↔ Hexadecimal
  - Decimal ↔ Hexadecimal
- Graceful handling of invalid inputs
- Uppercase formatting for hexadecimal outputs

## Tech Stack
- **Language:** JavaScript (Node.js)  
- **Libraries / Modules:**
  - `readline` – for console input/output
  - `BigInt` – for large integer support  
- **No external dependencies required**  

## Installation / Setup

### 1. Clone the Repository

git clone https://github.com/your-username/your-repo.git
cd your-repo
### 2. Install Node.js (if not already installed)

# macOS
brew install node

# Ubuntu
sudo apt install nodejs npm

### 3. Run the Application
node main.js
