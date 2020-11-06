import { Card } from "react-bootstrap";
import { CheckCircle, Visibility, Error } from "@material-ui/icons";
export const LastIncidents = () => {
  return (
    <div>
      <h3>Últimos Incidentes</h3>
      <Card className="mt-4 pt-4">
        <Card.Body>
          <div className="border-bottom mb-5">
            <h4 className="pl-5">02 de Agosto 2020</h4>
            <div className="d-flex flex-row">
              <div className="mx-5 mt-4">
                <CheckCircle
                  style={{
                    color: "#4AD991",
                    fontSize: "3rem",
                  }}
                />
              </div>
              <div className="mt-4">
                <h5>Solução</h5>
                <p className="lead">
                  Gerador atenderá como backup em casos semelhantes, garantindo
                  assim, a continuidade por períodos maiores que 23 horas.
                </p>
                <p className="text-muted">4 horas atrás</p>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="mx-5 mt-4">
                <Visibility
                  style={{
                    color: "#81C9FF",
                    fontSize: "3rem",
                  }}
                />
              </div>
              <div className="mt-4">
                <h5>Problema sendo monitorado</h5>
                <p className="lead">
                  Aquisição de nova unidade de GERADOR DE ENERGIA A DIESEL.
                </p>
                <p className="text-muted">8 horas atrás</p>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="mx-5 mt-4">
                <Error
                  style={{
                    color: "#FFCA83",
                    fontSize: "3rem",
                  }}
                />
              </div>
              <div className="mt-4">
                <h5>Incidente Energético</h5>
                <p className="lead">
                  Devido a incidentes naturais houvera a presença da falta de
                  energia na região por tempo não previsto, fazendo com que
                  hajam paradas do fornecimento de energia de forma segura, o
                  que faz com que a cada período de 23horas seja obrigatório o
                  reinício das atividades dos serviços prestados. Isto ocorre
                  diante ao fato de que o gerador disponibilizado pela ALERTRACK
                  possui coeficiência de até 20 Horas de disponibilidade do
                  fornecimento contínuo, somados à disponibilização por parte de
                  armazenamento de energia, menos o tempo necessário para o
                  desligamento dos servidores
                </p>
                <p className="text-muted">10 horas atrás</p>
              </div>
            </div>
            <div className="m-5">
              <p className="lead text-muted">
                <em>Nenhum incidente do WhatsApp neste dia</em>
              </p>
            </div>
          </div>
          <div className="border-bottom mb-5">
            <h4 className="pl-5">02 de Agosto 2020</h4>
            <div className="d-flex flex-row">
              <div className="mx-5 mt-4">
                <CheckCircle
                  style={{
                    color: "#4AD991",
                    fontSize: "3rem",
                  }}
                />
              </div>
              <div className="mt-4">
                <h5>Solução</h5>
                <p className="lead">WhatsApp voltou a operar normalmente.</p>
                <p className="text-muted">4 horas atrás</p>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="mx-5 mt-4">
                <Visibility
                  style={{
                    color: "#81C9FF",
                    fontSize: "3rem",
                  }}
                />
              </div>
              <div className="mt-4">
                <h5>Problema sendo monitorado</h5>
                <p className="lead">
                  O serviço está sendo restaurado para alguns países.
                </p>
                <p className="text-muted">8 horas atrás</p>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="mx-5 mt-4">
                <Error
                  style={{
                    color: "#FFCA83",
                    fontSize: "3rem",
                  }}
                />
              </div>
              <div className="mt-4">
                <h5>WhatsApp Interrumpido</h5>
                <p className="lead">
                  O WhatsApp está passando por uma interrupção geral em todo o
                  mundo. Não é possível usar o serviço porque o servidor está
                  fora do ar.
                </p>
                <p className="text-muted">10 horas atrás</p>
              </div>
            </div>
          </div>
          <div className="border-bottom mb-5">
            <h4 className="pl-5">02 de Agosto 2020</h4>

            <div className="m-5">
              <p className="lead text-muted">
                <em>Nenhum incidente do WhatsApp neste dia</em>
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
