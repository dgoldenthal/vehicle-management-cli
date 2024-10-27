// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

// define the Cli class
class Cli {
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  // static method to generate a vin
  static generateVin(): string {
    // return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  // method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        // set the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // perform actions on the selected vehicle
        this.performActions();
      });
  }

  // method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          choices: ['Car', 'Truck', 'Motorbike'],
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === 'Car') {
          this.createCar();
        } else if (answers.vehicleType === 'Truck') {
          this.createTruck();
        } else if (answers.vehicleType === 'Motorbike') {
          this.createMotorbike();
        }
      });
  }

  // method to create a car
createCar(): void {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'color',
        message: 'Enter Color',
      },
      {
        type: 'input',
        name: 'make',
        message: 'Enter Make',
      },
      {
        type: 'input',
        name: 'model',
        message: 'Enter Model',
      },
      {
        type: 'input',
        name: 'year',
        message: 'Enter Year',
      },
      {
        type: 'input',
        name: 'weight',
        message: 'Enter Weight',
      },
      {
        type: 'input',
        name: 'topSpeed',
        message: 'Enter Top Speed',
      },
    ])
    .then((answers) => {
      const car = new Car(
        // Using the static generateVin method from the Cli class
        Cli.generateVin(),
        answers.color,
        answers.make,
        answers.model,
        parseInt(answers.year),
        parseInt(answers.weight),
        parseInt(answers.topSpeed),
        []
      );
      // push the car to the vehicles array
      this.vehicles.push(car);
      // set the selectedVehicleVin to the vin of the car
      this.selectedVehicleVin = car.vin;
      // perform actions on the car
      this.performActions();
    });
}

  // method to create a truck
createTruck(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: 'Enter Towing Capacity',
        },
      ])
      .then((answers) => {
        const truck = new Truck(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [],
          parseInt(answers.towingCapacity)
        );
        this.vehicles.push(truck);
        this.selectedVehicleVin = truck.vin;
        this.performActions();
      });
  }

  // method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])
      .then((answers) => {
        const wheels = [
          new Wheel(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand),
          new Wheel(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand),
        ];
        
        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          wheels
        );
        this.vehicles.push(motorbike);
        this.selectedVehicleVin = motorbike.vin;
        this.performActions();
      });
  }

  // method to find a vehicle to tow
  findVehicleToTow(truck: Truck): void {
    const towableVehicles = this.vehicles.filter(v => v.vin !== truck.vin);
    
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: 'Select a vehicle to tow',
          choices: towableVehicles.map((vehicle) => ({
            name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
            value: vehicle,
          })),
        },
      ])
      .then((answers) => {
        truck.tow(answers.vehicleToTow);
        this.performActions();
      });
  }
}


  // method to perform actions on a vehicle
  performActions(): void {
  // Find the selected vehicle
  const selectedVehicle = this.vehicles.find(
    (vehicle) => vehicle.vin === this.selectedVehicleVin
  );

  // Define base choices that apply to all vehicles
  const baseChoices = [
    'Print details',
    'Start vehicle',
    'Accelerate 5 MPH',
    'Decelerate 5 MPH',
    'Stop vehicle',
    'Turn right',
    'Turn left',
    'Reverse',
    'Select or create another vehicle',
    'Exit',
  ];

  // Add vehicle-specific choices based on vehicle type
  let choices = [...baseChoices];
  if (selectedVehicle instanceof Truck) {
    choices.splice(choices.length - 2, 0, 'Tow vehicle');
  }
  if (selectedVehicle instanceof Motorbike) {
    choices.splice(choices.length - 2, 0, 'Do wheelie');
  }

  // Prompt user for action
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Select an action',
        choices: choices,
      },
    ])
    .then((answers) => {
      // Handle each action based on user selection
      switch (answers.action) {
        case 'Print details':
          selectedVehicle?.printDetails();
          break;

        case 'Start vehicle':
          selectedVehicle?.start();
          break;

        case 'Accelerate 5 MPH':
          selectedVehicle?.accelerate(5);
          break;

        case 'Decelerate 5 MPH':
          selectedVehicle?.decelerate(5);
          break;

        case 'Stop vehicle':
          selectedVehicle?.stop();
          break;

        case 'Turn right':
          selectedVehicle?.turn('right');
          break;

        case 'Turn left':
          selectedVehicle?.turn('left');
          break;

        case 'Reverse':
          selectedVehicle?.reverse();
          break;

        case 'Tow vehicle':
          if (selectedVehicle instanceof Truck) {
            this.findVehicleToTow(selectedVehicle);
            return; // Return here as findVehicleToTow will handle the next performActions call
          }
          break;

        case 'Do wheelie':
          if (selectedVehicle instanceof Motorbike) {
            selectedVehicle.wheelie();
          }
          break;

        case 'Select or create another vehicle':
          this.startCli();
          return; // Return to avoid calling performActions again

        case 'Exit':
          this.exit = true;
          break;

        default:
          console.log('Invalid action selected');
          break;
      }

      // Continue with more actions if not exiting
      if (!this.exit) {
        this.performActions();
      }
    })
    .catch((error) => {
      console.error('Error performing action:', error);
      this.performActions(); // Retry on error
    });
}

// Helper method to find a vehicle to tow
findVehicleToTow(truck: Truck): void {
  // Get all vehicles except the current truck
  const towableVehicles = this.vehicles.filter(v => v.vin !== truck.vin);

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'vehicleToTow',
        message: 'Select a vehicle to tow',
        choices: towableVehicles.map((vehicle) => ({
          name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
          value: vehicle,
        })),
      },
    ])
    .then((answers) => {
      // Attempt to tow the selected vehicle
      truck.tow(answers.vehicleToTow);
      // Continue with more actions
      this.performActions();
    })
    .catch((error) => {
      console.error('Error selecting vehicle to tow:', error);
      this.performActions(); // Retry on error
    });
}

  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// export the Cli class
export default Cli;
