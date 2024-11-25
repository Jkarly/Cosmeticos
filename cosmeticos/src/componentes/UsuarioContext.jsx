import { createContext, useContext, useState, useEffect } from "react";

const UsuarioContext = createContext();

export const useUsuarios = () => useContext(UsuarioContext);

export const UsuarioProvider = ({ children }) => {
  const Usuariosdefecto = [
    {
      nombreusuario: "admin",
      email: "admin@example.com",
      password: "admin123",
      telefono: "123456789",
      foto: null,
      nombreCompleto: "Administrador Usuario",
    },
    {
      nombreusuario: "karla12",
      email: "karla@example.com",
      password: "123",
      telefono: "987654321",
      foto: null,
      nombreCompleto: "Karla Torrez",
    },
    {
      nombreusuario: "wattfi12",
      email: "wattfi@example.com",
      password: "123",
      telefono: "555555555",
      foto: null,
      nombreCompleto: "Wattfi Vargas",
    },
  ];

  const cargarUsuarios = () => {
    const usuariosGuardados = localStorage.getItem("usuarios");
    return usuariosGuardados ? JSON.parse(usuariosGuardados) : Usuariosdefecto;
  };

  const [usuarios, setUsuarios] = useState(cargarUsuarios());
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);

 
  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);

  const agregarUsuario = (nuevoUsuario) => {
    setUsuarios((prevUsuarios) => [...prevUsuarios, nuevoUsuario]);
  };

  const iniciarSesion = (nombreusuario, password) => {
    const usuarioValido = usuarios.find(
      (u) => u.nombreusuario === nombreusuario && u.password === password
    );

    if (usuarioValido) {
      setUsuarioLogueado(usuarioValido);
      return true;
    }

    return false;
  };

  const cerrarSesion = () => {
    setUsuarioLogueado(null);
  };

  const actualizarUsuario = (datosActualizados) => {
    if (usuarioLogueado) {
      setUsuarioLogueado((prev) => ({ ...prev, ...datosActualizados }));

      setUsuarios((prevUsuarios) =>
        prevUsuarios.map((user) =>
          user.nombreusuario === usuarioLogueado.nombreusuario
            ? { ...user, ...datosActualizados }
            : user
        )
      );
    }
  };

  return (
    <UsuarioContext.Provider
      value={{
        usuarios,
        agregarUsuario,
        iniciarSesion,
        cerrarSesion,
        usuarioLogueado,
        actualizarUsuario,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
