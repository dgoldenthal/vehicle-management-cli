Vehicle Management CLI
Description
A TypeScript-based command-line interface (CLI) application for managing different types of vehicles. This application allows users to create and interact with various vehicle types including cars, trucks, and motorbikes, each with their own unique characteristics and capabilities.
Features
* Create and manage multiple vehicle types: 
o Cars with standard driving capabilities
o Trucks with towing functionality
o Motorbikes with wheelie ability
* Perform various actions on vehicles: 
o Start/Stop vehicle
o Accelerate/Decelerate
o Turn left/right
o Reverse
o Vehicle-specific actions (towing for trucks, wheelies for motorbikes)
* Full CLI interface with interactive prompts
* Unique VIN generation for each vehicle
* Customizable wheel configurations
* Detailed vehicle information display
Installation
1. Clone the repository:
git clone [repository-url]
2. Navigate to the project directory:
cd vehicle-management-cli
3. Install dependencies:
npm install


Usage
Start the application using:
npm start

Available Commands
Once running, you can:
1. Create a new vehicle 
o Choose vehicle type (Car/Truck/Motorbike)
o Enter vehicle details (color, make, model, etc.)
o Add custom wheels (optional)
2. Select an existing vehicle 
o View vehicle details
o Perform actions: 
* Basic movement controls
* Vehicle-specific actions
* View vehicle status
Vehicle Types and Capabilities
* Cars 
o Standard driving operations
o Four wheels configuration
* Trucks 
o All car capabilities
o Towing functionality with capacity limits
o Four wheels configuration
* Motorbikes 
o Standard driving operations
o Wheelie capability
o Two wheels configuration

Project Structure
vehicle-management-cli/
??? src/
?   ??? classes/
?   ?   ??? Car.ts
?   ?   ??? Truck.ts
?   ?   ??? Motorbike.ts
?   ?   ??? Vehicle.ts
?   ?   ??? Wheel.ts
?   ?   ??? Cli.ts
?   ??? interfaces/
?   ?   ??? AbleToTow.ts
?   ?   ??? Driveable.ts
?   ??? index.ts
??? dist/
??? package.json
??? tsconfig.json
??? README.md

Technical Details
* Built with TypeScript
* Uses Inquirer.js for CLI interactions
* Implements OOP principles: 
o Inheritance (Vehicle base class)
o Interfaces (Driveable, AbleToTow)
o Encapsulation
* Type safety enforced throughout
* Modular design for easy expansion
Development
To contribute or modify:
1. Make changes in the src directory
2. Compile TypeScript:
npm run build
3. Run the application:
npm start

Dependencies
* Node.js
* TypeScript
* Inquirer.js
* Type definitions for Node.js and Inquirer
Configuration
* TypeScript configuration in tsconfig.json
* NPM configuration in package.json
Demo Video
[Link to walkthrough video demonstrating functionality]
Contributing
1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request
Author
Dov Goldenthal
Notes
* The application uses the terminal/command prompt for all interactions
* Vehicle data is not persistent and will reset when the application is restarted
* All user inputs are validated before processing

