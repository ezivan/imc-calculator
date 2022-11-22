((d) => {
  const $form = d.querySelector(".form");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ($form.formWidth.value !== "" && $form.formHeight.value !== "") {
      let width = $form.formWidth.value,
        height = ($form.formHeight.value / 100) ** 2,
        imc = (width / height).toFixed(2);
      $form.imcValue.value = `IMC: ${imc}`;

      const imcDX = (imc) => {
        if (imc < 18.5) return "DX. Peso Insuficiente :(";
        if (imc >= 18.5 && imc <= 24.9) return "DX. Peso Normal :)";
        if (imc >= 25.0 && imc <= 29.9) return "DX. Con sobrepeso :(";
        if (imc >= 30) return "DX. Con obesidad :(";
      };

      $form.imcDx.value = imcDX(imc);
    } else {
      d.querySelector(".error-message").classList.add("active");
      setTimeout(() => {
        d.querySelector(".error-message").classList.remove("active");
      }, 2000);
    }
  });
})(document);
