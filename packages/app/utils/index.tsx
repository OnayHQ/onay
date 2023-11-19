export const addressShortner = (address: string) => {
  // Check if the input is a valid Ethereum address
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
    throw new Error("Invalid Ethereum address");
  }

  // Truncate and replace characters
  const truncatedAddress = `${address.substring(0, 6)}...${address.substring(
    address.length - 4
  )}`;

  return truncatedAddress;
};

export const getSemaphoreColorBasedOnPoints = (randomValue: number) => {
  let color;

  if (randomValue >= 1 && randomValue <= 30) {
    color = "red";
  } else if (randomValue > 30 && randomValue <= 70) {
    color = "yellow";
  } else if (randomValue > 70 && randomValue <= 100) {
    color = "green";
  }

  return color;
};
