import { useCallback, useState } from 'react';

const useClasseSelect = () => {
  
  function classNameBind(classDefault, classIf, classElse, flag) {

    if (flag) {
      return classDefault + " " + classIf
    } else {
      return classDefault + " " + classElse
    }
  
  }


  function makeGradientLinearStyle(gradient) {
    
    let styleString = `linear-gradient(${gradient.direction} , `

    for (let i = 0; i < gradient.colors.length; i++) {
      styleString += `${gradient.colors[i].color} ${gradient.colors[i].position}`
      if (i < gradient.colors.length - 1) {
        styleString += ` , `
      }
    }
    styleString += `)`
    return styleString
  
  }


  function makeGradientLinearStyle2(direcao_do_degrade, primeira_cor, primeira_posicao, segunda_cor,  segunda_posicao ) {
    let styleString = `linear-gradient(${direcao_do_degrade}, ${primeira_cor} ${primeira_posicao}% , ${segunda_cor} ${segunda_posicao}%)`
    return styleString
  }

  return {classNameBind, makeGradientLinearStyle, makeGradientLinearStyle2};
};

export default useClasseSelect;