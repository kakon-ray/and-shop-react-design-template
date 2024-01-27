import React, { useContext } from "react";

import { wishListContext } from "../Contexts/wishListContext";
import { toast } from "react-toastify";
import { CompareContext } from "../Contexts/CompareContext";

const useAddCompareList = (item, productDetailsitem) => {
  const [compareList, setCompareList] = useContext(CompareContext);

  const addToCompareList = () => {
    const exist = compareList.find(
      (compareItem) => compareItem?.id === productDetailsitem[0]?.id
    );

    if (!exist && compareList.length < 4) {
      setCompareList([
        ...compareList,
        {
          ...item,
        },
      ]);
      toast.success(" Added in Compare List");
    } else if (exist) {
      toast.error("Already Added in Compare List");
    } else {
      toast.error("Do not add more then 4 item ");
    }
  };
  return { addToCompareList };
};

export default useAddCompareList;
