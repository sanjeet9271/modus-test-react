import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentServiceService {

  constructor() { }

  public access__token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lkLnRyaW1ibGUuY29tIiwiZXhwIjoxNzM5NTI4NTcwLCJuYmYiOjE3Mzk1MjQ5NzAsImlhdCI6MTczOTUyNDk3MCwianRpIjoiNTA3ODZjODU3MDY2NDg3NmJkYjQ0ZGFjM2VjYjZkZmUiLCJqd3RfdmVyIjoyLCJzdWIiOiJmZTE5MWIxNy0zNWZlLTQwZTItYmYyNy05NTkwYjE0ZjZmZjMiLCJhdWQiOiJkOWQyMWVkMC0xNGU3LTQ4ODctYmE0Yi1kMTJhYzJmMmY0NjYiLCJpZGVudGl0eV90eXBlIjoidXNlciIsImF1dGhfdGltZSI6MTczOTUxMTQ3NiwiYW1yIjpbImZlZGVyYXRlZCIsIm9rdGFfdHJpbWJsZSIsIm1mYSJdLCJhenAiOiJkOWQyMWVkMC0xNGU3LTQ4ODctYmE0Yi1kMTJhYzJmMmY0NjYiLCJhdF9oYXNoIjoieUFUQWR3dWg0YTI5dlEzUE1neUUwdyIsImFjY291bnRfaWQiOiJ0cmltYmxlLXBsYWNlaG9sZGVyLW9mLWVtcGxveWVlcyIsImZlZGVyYXRpb25fb3JpZ2luIjoib2t0YV90cmltYmxlIiwiZ2l2ZW5fbmFtZSI6IlNhbmplZXQiLCJmYW1pbHlfbmFtZSI6Ikt1bWFyIiwiZW1haWwiOiJzYW5qZWV0X2t1bWFyQHRyaW1ibGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpY3R1cmUiOiJodHRwczovL3VzLmlkLnRyaW1ibGUuY29tL3VpL3Jlc291cmNlcy9kZWZhdWx0X3Byb2ZpbGUucG5nP3Y9MSIsImRhdGFfcmVnaW9uIjoidXMifQ.HOi4jRcwj8hpcUslWQGCpHV0HOT_Va5mvdE7TrGVgq9fn3GCwh9EJ-lvJmWZ30GBLSPmg-BVfxKrSp908GW8px8bN2XY4-Qmv9kZBmc0PXrKnhsLU2KQGGaxCb4oJZ8iDSuJOoai2zrJ-QQA4NLgqRjlf4Tc2Z8Ypz6FSz_5XfwECdG5zx6xphg8RLfjmaP6O2LEC3AfBoH5a8LFIMmmoaFu2Qc9zyKjzlUhYocOb93mV0iEcIQ-PFwCnEWbvW5bIJ1P0Yz9m9KnVKfpYp_qO-cUfP3inuV0hpfkcXxU83fZ9HQJq5_hTSauY0Fsc_AzdLxrWHmBYEgywzoatMejAA";

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
