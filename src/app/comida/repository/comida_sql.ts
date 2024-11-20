export const SQL_COMIDAS = {
    GET_ALL: 
    "SELECT c.id_comida, c.nombre_comida, c.precio_comida FROM comidas c",  
    ADD: 
    "INSERT INTO comidas (nombre_comida,precio_comida) VALUES ($1,$2) RETURNING id_comida",
    HOW_MANY: 
    "SELECT COUNT(id_comida) as existe FROM comidas WHERE id_comida = $1",
    HOW_MANY_BY_NAME:
    "SELECT COUNT(id_comida) as existe FROM comidas WHERE nombre_comida = $1",
    DELETE: 
    "DELETE FROM comidas WHERE id_comida = $1",
    UPDATE: 
    "UPDATE comidas set nombre_comida = $2, precio_comida = $3 WHERE id_comida = $1",
    UPDATE_MASIVO: 
    "UPDATE comidas set precio_comida = $2 WHERE nombre_comida LIKE $1",
    PAGE:
    "SELECT * FROM comidas ORDER BY nombre_comida LIMIT 10 OFFSET 0",
    GET_ONE_BY_ID:
    "SELECT c.id_comida, c.nombre_comida, c.precio_comida FROM comidas c WHERE c.id_comida=$1",
    GET_MANY_BY_NAME:
    "SELECT c.id_comida, c.nombre_comida, c.precio_comida FROM comidas c WHERE c.nombre_comida ILIKE '%' || $3 || '%' ORDER BY c.nombre_comida ASC LIMIT $1 OFFSET $2",
    EXITS_IN_MENU: 
    "SELECT COUNT(id_comida) FROM menu_cine WHERE id_comida = $1"
};