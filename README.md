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
Start the application using:
```bash
npm start
```

### Available Commands
Once running, you can:
1. Create a new vehicle
   - Choose vehicle type (Car/Truck/Motorbike)
   - Enter vehicle details (color, make, model, etc.)
   - Add custom wheels (optional)

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
```

## Technical Details
- Built with TypeScript
- Uses Inquirer.js for CLI interactions
- Implements OOP principles:
  - Inheritance (Vehicle base class)
  - Interfaces (Driveable, AbleToTow)
  - Encapsulation

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
[https://youtu.be/Y4jv2Z-AF7Q]

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## Notes
- The application uses the terminal/command prompt for all interactions
- Vehicle data is not persistent and will reset when the application is restarted
- All user inputs are validated before processing
