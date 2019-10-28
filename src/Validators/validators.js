export const required = value => {
   if (value) return undefined;
   return "This field is required";
}

export const minInput = value => {
  if (value && value.length < 3) return "This field cannot be less than 3 characters"
  return undefined
}

export const minText = value => {
  if (value && value.length < 10) return "This field cannot be less than 10 characters"
  return undefined
}
