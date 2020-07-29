function useNumberMask() {
  const decimalMask = (info:string) => {
      const onlyNumbers = Number(info.replace(/\D/g, ''));
      const stringWithMask = (onlyNumbers / 100)
        .toFixed(2)
        .replace('.', '.')
      return stringWithMask;
  };
  return decimalMask;
}

export default useNumberMask;