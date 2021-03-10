import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';

import './styles.css';

function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [comercial, setComercial] = useState('');
    const [residencial, setResidencial] = useState('');
    const [code, setCode] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [type, setType] = useState('');
    const [complement, setComplement] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            surname,
            email,
            avatar,
            whatsapp,
            cpf,
            rg,
            comercial,
            residencial,
            code,
            street,
            number,
            district,
            city,
            state,
            type,
            complement,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!');

            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro!');
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Quer atualizar ou completar seu cadastro?"
                description="Revise os campos abaixo e não deixe faltar nada."
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Suas formas de pagamento</legend>

                        <Input
                            name="name"
                            label="Nome"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />

                        <Input
                            name="surname"
                            label="Sobrenome"
                            value={surname}
                            onChange={(e) => { setSurname(e.target.value) }}
                        />

                        <Input
                            name="email"
                            label="Email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />

                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />

                        <Input
                            name="whatsapp"
                            label="WhatsApp"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />

                        <Input
                            name="cpf"
                            label="CPF"
                            value={cpf}
                            onChange={(e) => { setCpf(e.target.value) }}
                        />

                        <Input
                            name="rg"
                            label="RG"
                            value={rg}
                            onChange={(e) => { setRg(e.target.value) }}
                        />

                        <Input
                            name="comercial"
                            label="Contato Comercial"
                            value={comercial}
                            onChange={(e) => { setComercial(e.target.value) }}
                        />

                        <Input
                            name="residencial"
                            label="Contato Residencial"
                            value={residencial}
                            onChange={(e) => { setResidencial(e.target.value) }}
                        />

                        <Input
                            name="code"
                            label="CEP"
                            value={code}
                            onChange={(e) => { setCode(e.target.value) }}
                        />
                        <Input
                            name="street"
                            label="Rua"
                            value={street}
                            onChange={(e) => { setStreet(e.target.value) }}
                        />
                        <Input
                            name="number"
                            label="Número"
                            value={number}
                            onChange={(e) => { setNumber(e.target.value) }}
                        />
                        <Input
                            name="district"
                            label="Bairro"
                            value={district}
                            onChange={(e) => { setDistrict(e.target.value) }}
                        />
                        <Input
                            name="city"
                            label="Cidade"
                            value={city}
                            onChange={(e) => { setCity(e.target.value) }}
                        />
                        <Input
                            name="state"
                            label="Estado"
                            value={state}
                            onChange={(e) => { setState(e.target.value) }}
                        />
                        <Input
                            name="type"
                            label="Tipo"
                            value={type}
                            onChange={(e) => { setType(e.target.value) }}
                        />
                        <Input
                            name="complement"
                            label="Complemento"
                            value={complement}
                            onChange={(e) => { setComplement(e.target.value) }}
                        />

                        <Textarea
                            name="bio"
                            label="Bio"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Ciências', label: 'Ciências' },
                                { value: 'Educação física', label: 'Educação física' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'História', label: 'História' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Química', label: 'Química' },
                            ]}
                        />

                        <Input
                            name="cost"
                            label="Custo da sua hora por aula"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
              </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da semana"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' },
                                        ]}
                                    />
                                    <Input
                                        name="from"
                                        label="Das"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />

                                    <Input
                                        name="to"
                                        label="Até"
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />

                                </div>
                            );
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
                        <button type="submit">
                            Salvar cadastro
            </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;