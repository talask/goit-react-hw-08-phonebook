import { Loader } from "./Loader/Loader";

export const RegistredLayout = () => {

    return (
        <Div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter/>
      {isLoading && !error && <Loader/>}
      <Contacts/>
    </Div>
    )
}