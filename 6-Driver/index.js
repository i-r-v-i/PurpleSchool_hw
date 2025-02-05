const isDriver = (hasLicence, age, isDrunk) => {
    const canDrive = hasLicence && age >= 18 && !isDrunk
    console.log(canDrive ? "Может" : "Не может");
    return canDrive;
}

isDriver(true, 18, false);