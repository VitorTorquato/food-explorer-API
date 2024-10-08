
exports.up = knex => knex.schema.createTable("Dishes", table => {
    
    table.increments("id");

    table.decimal("image");

    table.text("name").notNullable();
    table.text("category").notNullable();
    table.text("description").notNullable();
    table.decimal("price");
    
    table.integer("user_id").references("id").inTable("users");

    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());


});


exports.down = knex => knex.schema.dropTable("Dishes");