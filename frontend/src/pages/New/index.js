import React from 'react';

// import { Container } from './styles';

export default function New() {
  const [company, setCompany] = useState('')

  function handleSubmit() {

  }

  return (
    <form onSubmit={}>
      <label htmlFor="company">EMPRESA *</label>
      <input
        id="company"
        placeholder="Sua empresa incr�vel"
        value={event => setCompany(event.target.value)}
      />
      <label htmlFor="company">TECNOLOGIAS * <span>(separadas por v�rgulas)</span></label>
      <input
        id="company"
        placeholder="Sua empresa incr�vel"
        value={event => setCompany(event.target.value)}
      />
    </form>
  );
}
