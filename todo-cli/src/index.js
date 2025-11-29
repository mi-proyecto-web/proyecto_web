import inquirer from "inquirer";
import chalk from "chalk";

const tasks = [];

async function main() {
  console.log(chalk.blue("=== TODO CLI ==="));

  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "newTask",
      message: "Escribe una nueva tarea:",
    },
  ]);

  tasks.push(answers.newTask);

  console.log(chalk.green("\nTarea agregada correctamente!\n"));
  console.log(chalk.yellow("Lista de tareas:"));
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

main();
