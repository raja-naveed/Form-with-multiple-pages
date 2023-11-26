import { fetchVisitorData } from "@/src/store/features/dataSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const GetVisitor = () => {
  const dispatch = useDispatch();
  const visitorData = useSelector((state) => state.visitor.visitor); 

  useEffect(() => {
    dispatch(fetchVisitorData());
  }, [dispatch]);
  
    const city = visitorData ? visitorData.address.city : null;
  

  return null;
};

export default GetVisitor;