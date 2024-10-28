<<<<<<< HEAD
# Vehicle Management CLI

## Description
A TypeScript-based command-line interface (CLI) application for managing different types of vehicles. This application allows users to create and interact with various vehicle types including cars, trucks, and motorbikes, each with their own unique characteristics and capabilities.

## Features
- Create and manage multiple vehicle types:
  - Cars with standard driving capabilities
  - Trucks with towing functionality
  - Motorbikes with wheelie ability
- Perform various actions on vehicles:
  - Start/Stop vehicle
  - Accelerate/Decelerate
  - Turn left/right
  - Reverse
  - Vehicle-specific actions (towing for trucks, wheelies for motorbikes)
- Full CLI interface with interactive prompts
- Unique VIN generation for each vehicle
- Customizable wheel configurations
- Detailed vehicle information display

## Installation
1. Clone the repository:
```bash
git clone https://github.com/dgoldenthal/vehicle-management-cli
```

2. Navigate to the project directory:
```bash
cd vehicle-management-cli
```

3. Install dependencies:
```bash
npm install
```

## Usage
=======
Vehicle Management CLI

Description
A TypeScript-based command-line interface (CLI) application for managing different types of vehicles. 
This application allows users to create and interact with various vehicle types including 
cars, trucks, and motorbikes, each with their own unique characteristics and capabilities.

Features
•	Create and manage multiple vehicle types: 
o	Cars with standard driving capabilities
o	Trucks with towing functionality
o	Motorbikes with wheelie ability
•	Perform various actions on vehicles: 
o	Start/Stop vehicle
o	Accelerate/Decelerate
o	Turn left/right
o	Reverse
o	Vehicle-specific actions (towing for trucks, wheelies for motorbikes)
•	Full CLI interface with interactive prompts
•	Unique VIN generation for each vehicle
•	Customizable wheel configurations
•	Detailed vehicle information display

Installation
1.	Clone the repository:
git clone [https://github.com/dgoldenthal/vehicle-management-cli]
2.	Navigate to the project directory:
cd vehicle-management-cli
3.	Install dependencies:
npm install

Usage
>>>>>>> 4b2ca872433d33278cca40d57c11ca11d5ea099e
Start the application using:
```bash
npm start
```

### Available Commands
Once running, you can:
<<<<<<< HEAD
1. Create a new vehicle
   - Choose vehicle type (Car/Truck/Motorbike)
   - Enter vehicle details (color, make, model, etc.)
   - Add custom wheels (optional)
=======
1.	Create a new vehicle 
o	Choose vehicle type (Car/Truck/Motorbike)
o	Enter vehicle details (color, make, model, etc.)
o	Add custom wheels (optional)

2.	Select an existing vehicle 
o	View vehicle details
o	Perform actions: 
	Basic movement controls
	Vehicle-specific actions
	View vehicle status

3. Vehicle Types and Capabilities
•	Cars 
o	Standard driving operations
o	Four wheels configuration
•	Trucks 
o	All car capabilities
o	Towing functionality with capacity limits
o	Four wheels configuration
•	Motorbikes 
o	Standard driving operations
o	Wheelie capability
o	Two wheels configuration
>>>>>>> 4b2ca872433d33278cca40d57c11ca11d5ea099e

2. Select an existing vehicle
   - View vehicle details
   - Perform actions:
     - Basic movement controls
     - Vehicle-specific actions
     - View vehicle status

### Vehicle Types and Capabilities
- **Cars**
  - Standard driving operations
  - Four wheels configuration
  
- **Trucks**
  - All car capabilities
  - Towing functionality with capacity limits
  - Four wheels configuration
  
- **Motorbikes**
  - Standard driving operations
  - Wheelie capability
  - Two wheels configuration

## Project Structure
```
vehicle-management-cli/
├── src/
│   ├── classes/
│   │   ├── Car.ts
│   │   ├── Truck.ts
│   │   ├── Motorbike.ts
│   │   ├── Vehicle.ts
│   │   ├── Wheel.ts
│   │   └── Cli.ts
│   ├── interfaces/
│   │   ├── AbleToTow.ts
│   │   └── Driveable.ts
│   └── index.ts
├── dist/
├── package.json
├── tsconfig.json
└── README.md
<<<<<<< HEAD
```

## Technical Details
- Built with TypeScript
- Uses Inquirer.js for CLI interactions
- Implements OOP principles:
  - Inheritance (Vehicle base class)
  - Interfaces (Driveable, AbleToTow)
  - Encapsulation
- Type safety enforced throughout
- Modular design for easy expansion

## Development
To contribute or modify:

1. Make changes in the `src` directory
2. Compile TypeScript:
```bash
npm run build
```
3. Run the application:
```bash
npm start
```

## Dependencies
- Node.js
- TypeScript
- Inquirer.js
- Type definitions for Node.js and Inquirer

## Configuration
- TypeScript configuration in `tsconfig.json`
- NPM configuration in `package.json`

## Demo Video
[Link to walkthrough video demonstrating functionality]

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## Acknowledgments
- Built as part of [Course/Project Name]

## Notes
- The application uses the terminal/command prompt for all interactions
- Vehicle data is not persistent and will reset when the application is restarted
- All user inputs are validated before processing
=======

Technical Details
•	Built with TypeScript
•	Uses Inquirer.js for CLI interactions
•	Implements OOP principles: 
o	Inheritance (Vehicle base class)
o	Interfaces (Driveable, AbleToTow)
o	Encapsulation
•	Type safety enforced throughout
•	Modular design for easy expansion

Development
To contribute or modify:
1.	Make changes in the src directory
2.	Compile TypeScript:
npm run build
3.	Run the application:
npm start

Dependencies
•	Node.js
•	TypeScript
•	Inquirer.js
•	Type definitions for Node.js and Inquirer

Configuration
•	TypeScript configuration in tsconfig.json
•	NPM configuration in package.json

Demo Video
[Link to walkthrough video demonstrating functionality]

Author
Dov Goldenthal

Notes
•	The application uses the terminal/command prompt for all interactions
•	Vehicle data is not persistent and will reset when the application is restarted
•	All user inputs are validated before processing
>>>>>>> 4b2ca872433d33278cca40d57c11ca11d5ea099e
