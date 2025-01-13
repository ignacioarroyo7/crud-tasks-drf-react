import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const ListItem = React.memo(({ task }) => {
  
  const navigate = useNavigate()

  return (
    <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={()=>{
        navigate(`/tasks/${task.id}`);
      }}
    >
      <ul>
          <h5 className="font-bold uppercase">{task.title}</h5>
          <p>{task.descripcion}</p>
          <p>Estado: {task.done ? "Finalizada" : "Pendiente"}</p>
      </ul>
    </div>
  );
});

//DisplayName para herramientas de depuración
ListItem.displayName = "ListItem";

// Validar las props usando PropTypes
ListItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
};
