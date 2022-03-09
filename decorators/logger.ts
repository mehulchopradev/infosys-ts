// method of an object
export default function Logger(obj, methodName: string, methodDescriptor: PropertyDescriptor) {
  console.log(obj);
  // console.log(methodName);
  // console.log(methodDescriptor);

  const originalFunction = methodDescriptor.value;

  methodDescriptor.value = (...args) => {
    // logging
    const d: Date = new Date();
    console.log(d);
    console.log(`Method name: ${methodName}`);
    console.log(args);

    console.log(obj);

    // go ahead and call the original function
    originalFunction.apply(obj, args);
  }

  return methodDescriptor;
}