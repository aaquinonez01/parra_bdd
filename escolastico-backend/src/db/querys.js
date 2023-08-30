export const queries = {
  registrarUsuario:
    "EXEC InsertNewUser @name_user = @nombre, @password_user = @contrasena, @privileges = @privilegios, @user_id = @idUsuario;",
  verUsuarios: "EXEC GetListUsers @user_id = @idUsuario;",
  actualizarUsuario:
    "EXEC UpdateUser @id_user = @UsuarioId, @name_user = @nombre, @password_user = @contrasena, @privileges = @privilegios, @user_id = @idUsuario;",
  eliminarUsuario:
    "EXEC DeleteUser @id_user = @UsuarioId, @user_id = @idUsuario;",
  registrarEstudiante:
    "EXEC InsertNewStudent @name_user = @nombre, @password_user = @contrasena, @privileges = @privilegios, @name_est = @nombreEstudiante, @lastName_est = @apellidoEstudiante, @identification_est = @identificacionEstudiante, @email_est = @emailEstudiante, @dateBirth_est = @fechaNacimientoEstudiante, @address_est = @direccionEstudiante, @phone_est = @telefonoEstudiante, @user_id = @idUsuario;",
  verEstudiantes: "EXEC GetListStudent @user_id = @idUsuario;",
  actualizarEstudiante:
    "EXEC UpdateStudent @id_est = @idEstudiante, @name_est = @nombreEstudiante, @lastName_est = @apellidoEstudiante, @identification_est = @identificacionEstudiante, @email_est = @emailEstudiante, @dateBirth_est = @fechaNacimientoEstudiante, @address_est = @direccionEstudiante, @phone_est = @telefonoEstudiante, @user_id = @idUsuario;",
  eliminarEstudiante:
    "EXEC DeleteStudentAndUser @id_est = @idEstudiante, @id_user = @UsuarioId, @user_id = @idUsuario;",
  registrarProfesor:
    "EXEC InsertNewTeacher @name_user = @nombre, @password_user = @contrasena, @name_teach = @nombreProfesor, @privileges = @privilegios, @lastName_teach = @apellidoProfesor, @identification_teach = @identificacionProfesor, @email_teach = @emailProfesor, @profession_teach = @profesionProfesor, @address_teach = @direccionProfesor, @phone_teach = @telefonoProfesor, @user_id = @idUsuario;",
  verProfesores: "EXEC GetListTeacher @user_id = @idUsuario;",
  actualizarProfesor:
    "EXEC UpdateTeacher @id_teach = @idProfesor, @name_teach = @nombreProfesor, @lastName_teach = @apellidoProfesor, @identification_teach = @identificacionProfesor, @email_teach = @emailProfesor, @profession_teach = @profesionProfesor, @address_teach = @direccionProfesor, @phone_teach = @telefonoProfesor, @user_id = @idUsuario;",
  eliminarProfesor:
    "EXEC DeleteTeacherAndUser @id_teach = @idProfesor, @id_user = @UsuarioId, @user_id = @idUsuario;",
  registrarMateria:
    "EXEC InsertNewSubject @name_subj = @nombreMateria, @teacher_id = @profesorId, @user_id = @idUsuario;",
  verMaterias: "EXEC GetListSubject @user_id = @idUsuario;",
  actualizarMateria:
    "EXEC UpdateSubject @id_subj = @idMateria, @name_subj = @nombreMateria, @teacher_id = @profesorId, @user_id = @idUsuario;",
  eliminarMateria:
    "EXEC DeleteSubject @id_subj = @idMateria, @user_id = @idUsuario;",

  registrarNota:
    "EXEC InsertNewNote @firstPartial_note = @primerParcial, @secondPartial_note = @segundoParcial, @thirdPartial_note = @tercerParcial, @student_id = @idEstudiante, @subject_id = @idMateria, @user_id = @idUsuario;",
  verNotas: "EXEC GetListNote @user_id = @idUsuario;",
  actualizarNota:
    "EXEC UpdateNote @id_note = @idNota, @firstPartial_note = @primerParcial, @secondPartial_note = @segundoParcial, @thirdPartial_note = @tercerParcial, @student_id = @idEstudiante, @subject_id = @idMateria, @user_id = @idUsuario;",
  eliminarNota: "EXEC DeleteNote @id_note = @idNota, @user_id = @idUsuario;",
  loginUser:
    "EXEC LoginUser @name_user = @nombre, @password_user = @contrasena",
    obtenerNotasPorMateriaYProfesor: "SELECT * FROM vw_NotesBySubjectTeacherStudent WHERE subject_name = @nombreMateria AND teacher_name = @nombreProfesor AND HasPrivilege(@idUsuario, 21)=1;",
    obtenerNotasPorEstudiante: "SELECT * FROM vw_NotesByStudentAndSubject WHERE student_name = @nombreEstudiante AND dbo.HasPrivilege(@idUsuario, 22)=1;",
    obtenerTresMejoresNotasPorMateria: "SELECT * FROM vw_Top3ScoresBySubject WHERE subject_name = @nombreMateria AND HasPrivilege(@idUsuario, 23)=1;",
    obtenerInformacionPorID:"SELECT * FROM vw_StudentOrTeacherInfo WHERE role = @rol AND id = @id AND HasPrivilege(@idUsuario, 24)=1;",
    obtenerEstudiantePorIdUsuario: "SELECT * FROM students WHERE user_id = @idUsuario;",
    obtenerProfesorPorIdUsuario: "SELECT * FROM teachers WHERE user_id = @idUsuario;"
};
