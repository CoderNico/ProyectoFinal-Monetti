<div className="grid grid-cols-5 w-2/3 h-full ring align-middle justify-center m-auto mt-60">
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Nombre</label>
            <input type="text" className="" value={formCheckOut.name} onChange={handleName}/>
            <label htmlFor="">Apellido</label>
            <input type="text" className="" value={formCheckOut.lastName} onChange={handleLastName}/>
            <label htmlFor="">Dirección</label>
            <input type="text" className="" value={formCheckOut.adres} onChange={handleAdres}/>
            <label htmlFor="">Email</label>
            <input type="email" className="" value={formCheckOut.email} onChange={handleEmail}/>
            <label htmlFor="">Telefono</label>
            <input type="number" className="" value={formCheckOut.phone} onChange={handlePhone}/>
            <input type="submit" className="" value="Terminar la compra"/>
        </form>
    </div>