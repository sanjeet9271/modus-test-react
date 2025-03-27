import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentServiceService {

  constructor() { }

  public access__token = "";

  private async retryRequest<T>(requestFn: () => Promise<T>, retries: number = 3): Promise<T | undefined> {
    for (let attempt = 0; attempt < retries; attempt++) {
      try{
        const result = await requestFn();
        if (result !== undefined) {
          return result;
        }
      } catch (error) {
        if(attempt === retries - 1){
          console.error('Failed after 3 retries');
        }
      }
    }
    return undefined;
  }

  public async GetGeneralAssistantResponse(agent_name: string, message: string,sessionId:string): Promise<string | undefined> {
    const requestFn = async () => {
      const trimbleAssistantMessageURL = `https://agw.construction-integration.trimble.cloud/trimbledeveloperprogram/assistants/v1/agents/${agent_name}/messages`;
      const accessToken = this.access__token;
      const response: any = await fetch(
        `${trimbleAssistantMessageURL}`,
        {
          headers: new Headers({
            Authorization: 'Bearer ' + accessToken,
            'Content-Type': 'application/json',
          }),
          method: 'POST',
          body: JSON.stringify({
            message: message,
            stream: false,
            model_id: 'gpt-4o',
            session_id: sessionId,
          }),
        }
      );

      if (response.status !== 200) {
        return undefined;
      }

      const responseData = await response.json();
      return responseData.message;
    }

    return await this.retryRequest(requestFn);
  }
}
