import { TbArrowDown } from "react-icons/tb";
import teacher from "../../assets/teacher-female.svg";

const InitialDashboard = () => {
  return (
    <section className="min-h-screen w-full flex justify-center items-end border-b-2 border-forest-50">
        <div
          data-aos="fade-in"
          className="container xl:h-screen xl:mt-0 mt-24 overflow-hidden rounded-bottom xl:flex-row xl:gap-0 gap-4 flex-col flex justify-between items-center"
        >
          <div
            data-aos="zoom-in-down"
            data-aos-delay="300"
            className="w-full h-max shadow-lg flex flex-col gap-2"
          >
            <h4 className="text-forest-50 font-bold text-2xl text-center md:text-start">
              Prólogo
            </h4>
            <div className="bg-forest-50 rounded xl:p-4 p-2">
              <p>
                Aqui, explorarei aspectos cruciais do modelo de ensino a
                distância (EAD), fornecendo uma compreensão detalhada sobre o
                funcionamento de nossa plataforma. Além disso, apresentarei
                dados relevantes sobre o EAD, incluindo suas{" "}
                <a href="#char" className="hover:underline text-forest-500">
                  principais características
                </a>
                ,{" "}
                <a href="#chal" className="hover:underline text-forest-500">
                  benefícios e desafios
                </a>
                . Abordarei também o cenário atual do EAD no Brasil, seu
                público-alvo e os tipos de cursos disponíveis.
              </p>
              <p>
                Apresento esses dados com o objetivo de validar a eficácia desse
                modelo de ensino e desfazer os equívocos relacionados a ele.
                Muitas vezes, existe o conceito errôneo de que as empresas não
                reconhecem esse tipo de certificado.
              </p>
              <p>
                Portanto, ao conhecermos as estatísticas e os fatos concretos
                sobre o ensino a distância, podemos tomar decisões mais
                informadas sobre nossa educação e carreira. Afinal, a educação
                EAD oferece flexibilidade, acessibilidade e qualidade, muitas
                vezes equiparando-se ou até superando o ensino presencial.
                Estamos em um momento em que as empresas estão cada vez mais
                abertas a profissionais com diplomas de cursos EAD, reconhecendo
                seu valor e adaptabilidade.
              </p>
            </div>
          </div>
          <div className="max-w-[360px] md:max-w-[400px] xl:max-w-[480px] h-full flex items-end">
            <img src={teacher} alt="teacher" className="w-full" />
          </div>
        </div>
        <div className="absolute bottom-12 text-forest-50 text-5xl animate-goDown">
          <TbArrowDown />
        </div>
      </section>
  );
};

export default InitialDashboard;